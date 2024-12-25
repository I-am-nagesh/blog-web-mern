import { Button, TextInput } from "flowbite-react";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
  return (
    <div>
      <h1>Create a post</h1>
      <form>
        <div>
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
          />
          <Select>
            <option value="uncategorozed">Select a category</option>
            <option value="History">History</option>
            <option value="Geography">Geography</option>
            <option value="Economics">Economics</option>
            <option value="Geopolitics">Geopolitics</option>
            <option value="Current Affairs">Current Affairs</option>
          </Select>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          required
        />
        <Button type="submit" gradientDuoTone="purpleToBlue">
          Publish
        </Button>
      </form>
    </div>
  );
}
