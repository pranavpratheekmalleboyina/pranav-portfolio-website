export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="h1">Contact</h1>
      <p className="p">
        Email me at <a className="underline" href="mailto:you@example.com">you@example.com</a> or connect on LinkedIn.
      </p>
      <form className="max-w-md space-y-4">
        <input type="text" name="name" placeholder="Your name" className="w-full p-3 border rounded-xl" />
        <input type="email" name="email" placeholder="Your email" className="w-full p-3 border rounded-xl" />
        <textarea name="message" placeholder="Your message" className="w-full p-3 border rounded-xl h-36" />
        <button type="button" className="btn btn-primary">Send</button>
      </form>
      <p className="text-sm text-gray-500">
        (Demo button — we can wire this to a serverless email endpoint later.)
      </p>
    </div>
  );
}
