import { useSession } from "next-auth/react";
import Image from "next/image";
import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { firestore, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as createId } from 'uuid';

const InputBox = () => {
  const { data: session } = useSession();
  const inputRef = useRef<HTMLInputElement>(null);
  const filePickerRef = useRef<HTMLInputElement>(null);
  const [imageToPostPreview, setImageToPostPreview] = useState<any>(null);
  const [imagePost, setImagePost] = useState<File | null>(null);

  const sendPost = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!inputRef.current!.value) return;

    let postUrl = '';
   const postsCollection = collection(firestore, `posts`);

   if(imagePost as File) {
      let randomName = createId();
      let newPost = ref(storage, `posts/${randomName}`);
      
      let upload = await uploadBytes(newPost, imagePost!);
      postUrl = await getDownloadURL(upload.ref);
      
      setImageToPostPreview(null);
      setImagePost(null);
   }

   const newPost = {
    message: inputRef.current!.value,
    name: session!.user.name,
    email: session!.user.email,
    image: session!.user.image,
    timestamp: serverTimestamp(),
    postUrl
   }
   
  addDoc(postsCollection, newPost);

   inputRef.current!.value = "";
  };

  const addImageToPost = (e: ChangeEvent) => {
    const reader = new FileReader();
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    if (file) {
      reader.readAsDataURL(file);
    }

    reader.onload = (readerEvent) => {
      setImageToPostPreview(readerEvent.target!.result)
    }

    setImagePost(file);
  }

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex items-center space-x-4 p-4">
        <Image
          src={session!.user.image}
          alt={session!.user.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <form className="flex flex-1">
          <input
            type="text"
            ref={inputRef}
            placeholder={`What's on your mind, ${session!.user.name}?`}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
          />
          <button hidden onClick={sendPost}>
            Submit
          </button>
        </form>

        {imageToPostPreview &&
          <div onClick={() => setImageToPostPreview(null)} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
            <img src={imageToPostPreview} className="h-10 object-contain" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        }
      </div>

      <div className="flex justify-evenly">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-x5 sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div onClick={() => filePickerRef.current!.click()} className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-x5 sm:text-sm xl:text-base">Photo/Video</p>
          <input hidden ref={filePickerRef} onChange={addImageToPost} type='file' />
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-x5 sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
