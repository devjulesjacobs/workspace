<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManagerStatic as Image;

class PostController extends Controller
{
    protected function getAll() {
        return Post::orderBy('created_at', 'desc')->get();
    }

    protected function store(Request $request) {
        $validator = Validator::make($request->all(),[
            'title' => 'required|string|max:255',
            'body' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors());
        }

        switch($_FILES['image']['type']) {
            case 'image/png': $extension = '.png'; break;
            case 'image/jpeg': $extension = '.jpg'; break;
            default: return response()->json(['message' => 'No image found or not the right filetype.'], 404);
        }

        $img = Image::make($request->file('image'));
        $img->fit( 500, 300);

        $path = public_path("img/posts/"); // set your own directory name there
        $filename = time().'-post'.$extension; // get your own filename here

        $img->save($path.$filename);

        $post = Post::create([
            'title' => $request->title,
            'body' => $request->body,
            'image' => $filename
        ]);

        $post->save();

        return response()->json([
            'message' => 'Post created.',
        ], 201);
    }

    protected function show(Request $request, $id) {
        $post = Post::find($id);

        return response()->json([
            'message' => 'Post found',
            'data' => $post
        ], 201);
    }

    protected function update(Request $request, $id) {

        $data = $request->validate([
            'title' => 'nullable|string|max:255',
            'body' => 'nullable',
            'image' => 'nullable'
        ]);

        $post = Post::find($id);

        if($post) {
            $post->update($data);

            return response()->json([
                'message' => 'Post updated.',
                'data' => $post
            ], 201);
        } else {
            return response()->json([
                'message' => 'Post not found',
            ], 404);
        }
    }
}
