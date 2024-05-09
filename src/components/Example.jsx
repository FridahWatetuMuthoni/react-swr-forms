function Example() {
  const emojis = [
    {
      emoji: "😀",
      name: "test grinning face",
    },
    {
      emoji: "🎉",
      name: "party popper",
    },
    {
      emoji: "💃",
      name: "woman dancing",
    },
  ];
  return (
    <section className="space-y-3 text-lg border-2 border-indigo-400 rounded-lg p-5 mt-5">
      {emojis.map((emoji, index) => (
        <section key={emoji.name} className="flex space-x-4 items-center">
          <section className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
            <span className="text-white text-sm font-bold">{index + 1}</span>
          </section>
          <h2 className="text-lg font-medium ">{emoji.name}</h2>
          <h2 className="text-lg font-medium ">{emoji.emoji}</h2>
        </section>
      ))}
    </section>
  );
}

export default Example;
