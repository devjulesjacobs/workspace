<?php

namespace App\Http\Controllers;

use App\Faq;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FaqController extends Controller
{
    protected function index() {
        return Faq::all();
    }

    protected function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'question' => 'required|string|max:255',
            'answer' => 'required'
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors());
        }

        $faq = Faq::create([
            'question' => $request->question,
            'answer' => $request->answer
        ])->save();

        return response()->json([
            'message' => 'FAQ created'
        ]);
    }

    protected function show(Request $request, $id) {
        $faq = Faq::find($id);

        return response()->json($faq, 201);
    }

    protected function update(Request $request, $id) {
        $validator = Validator::make($request->all(), [
           'question' => 'string|max:255',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors());
        }

        $faq = Faq::find($id);

        if($faq) {
            $faq->update([
                'question' => $request->question,
                'answer' => $request->answer
            ]);

            return response()->json([
                'message' => 'FAQ updated.',
                'data' => $faq
            ], 201);
        } else {
            return response()->json([
                'message' => 'FAQ not found',
            ], 404);
        }
    }
}
