export default function Footer() {
  return (
    <div className="w-full bg-slate-900 border-t-4 border-black p-8">
      <p className="text-center text-light text-gray-400">
        Thanks for visiting!
        <br />
        &copy; {new Date().getFullYear()} Herman Cai
      </p>
    </div>
  );
}
