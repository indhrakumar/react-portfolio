function Contact() {
  return (
    <div className="text-text px-10 min-h-screen pt-16">
      <h1 className="text-7xl font-mulish mt-10 text-center font-bold">
        Contact
      </h1>
      <div className="max-w-5xl border bg-bgCard border-bglite mt-10 flex flex-col p-5 rounded-2xl mx-auto">
        <input
          type="email"
          className=" px-3 py-1 border border-gray-900 rounded-md outline-none focus:shadow-[inset_0_0_5px_black]"
          placeholder="Email"
        />
        <textarea
          rows={5}
          className="resize-none mt-5 px-3 py-1 border border-gray-900 rounded-md outline-none focus:shadow-[inset_0_0_5px_black] "
          placeholder="Enter Your Message....."></textarea>
        <button className="my-10 py-2 px-5 bg-cyan-400 text-text font-bold text-2xl w-fit mx-auto rounded-full">
          Send
        </button>
      </div>
    </div>
  );
}

export default Contact;
