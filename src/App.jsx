function App() {
  return (
    <div className="bg-slate-100">
      1. Font Family
      <br />
      <div className="w-full">
        <p className="font-sans text-left">The Black Soldier</p>
        <p className="font-serif text-center">The Black Soldier</p>
        <p className="font-mono text-right">The Black Soldier</p>
      </div>
      <br />
      2. Hover
      <br />
      <p className="font-sans hover:font-serif text-red-600 font-extrabold text-center tracking-normal">
        Arahkan Cursor Saya
      </p>
      <br />
      3. Font Size
      <br />
      <p className="text-sm">The Black Soldier</p>
      <p className="text-base">The Black Soldier</p>
      <p className="text-lg">The Black Soldier</p>
      <p className="text-2xl">The Black Soldier</p>
      <p className="text-[100px]">The Black Soldier</p>{" "}
      {/* "Gunakan Array [] Jika ingin mengcustom text" */}
      <br />
      4. Italic
      <br />
      <p className="italic">The Black Soldier</p>
      <p className="not-italic">The Black Soldier</p>
      <br />
      5. Font Weight
      <br />
      <p className="font-light">The Black Soldier</p>
      <p className="font-normal">The Black Soldier</p>
      <p className="font-medium">The Black Soldier</p>
      <p className="font-bold">The Black Soldier</p>
      <p className="font-semibold">The Black Soldier</p>
      <br />
      6. Letter Spacing
      <br />
      <p className="tracking-tighter">The Black Soldier</p>
      <p className="tracking-normal">The Black Soldier</p>
      <p className="tracking-widest">The Black Soldier</p>
      <p className="tracking-widest">The Black Soldier</p>
      <br />
      7. Line Height
      <br />
      <p className="leading-normal">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
        eveniet quibusdam doloremque laborum, eos labore eaque odio pariatur?
        Reprehenderit commodi eum officia nisi consectetur saepe repellat quia
        autem praesentium odio.
      </p>
      <br />
      <p className="leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        aperiam beatae itaque voluptates sed necessitatibus, repellendus atque
        voluptatum, ipsam, laborum voluptatem animi! Natus dignissimos facilis
        in fuga eveniet at quos!
      </p>
      <br />
      <p className="leading-loose">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, cum odit
        mollitia nesciunt suscipit fugiat culpa sed nulla libero ea quod ex iste
        ullam quasi aspernatur, dolore quam voluptate incidunt.
      </p>
      <br />
      8. Text Align
      <br />
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deleniti
        qui eaque perferendis soluta dignissimos suscipit quos. Ratione fugit
        aliquam eius veritatis, magni, molestias hic ad, excepturi deserunt
        eveniet incidunt?
      </p>
      <br />
      <p className="text-right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        molestiae ipsam sed deserunt animi doloremque, dolores iure cumque
        quaerat nam quibusdam enim dolor blanditiis quisquam fugiat aliquam,
        voluptas perspiciatis alias!
      </p>
      <br />
      <p className="text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda
        unde voluptatem, optio pariatur veniam delectus amet vero eaque
        cupiditate mollitia accusantium accusamus, modi excepturi! Quas ea unde
        numquam officia.
      </p>
      <br />
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti beatae
        quia quam quidem. Officia quos iste sint repellendus necessitatibus
        reiciendis at maiores, temporibus doloremque doloribus, aspernatur
        voluptas natus nisi placeat.
      </p>
      <br />
      9. Text Color
      <br />
      <p class="text-sky-400">The quick brown fox...</p>
      <p class="text-sky-500">The quick brown fox...</p>
      <p class="text-sky-600">The quick brown fox...</p>
      <p class="text-sky-700">The quick brown fox...</p>
      <p class="text-sky-800">The quick brown fox...</p>
      <p class="text-sky-900 hover:text-purple-500">
        The quick brown fox...
      </p>{" "}
      {/* Jika semakin besar angkanya, maka semakin gelap warnanya*/}
      <br />
      10. Text Decoration
      <br />
      <p class="underline ...">The quick brown fox ...</p>
      <p class="overline ...">The quick brown fox ...</p>
      <p class="line-through ...">The quick brown fox ...</p>
      <p class="no-underline mx-[650px] ...">The quick brown fox ...</p>
      <p class="underline decoration-solid ...">The quick brown fox...</p>
      <p class="underline decoration-double ...">The quick brown fox...</p>
      <p class="underline decoration-dotted ...">The quick brown fox...</p>
      <p class="underline decoration-dashed ...">The quick brown fox...</p>
      <p class="underline decoration-wavy ...">The quick brown fox...</p>
      <br />
      10. Background
      <br />
      <div className="bg-indigo-500">The quick brown fox...</div>
      <div className="bg-rose-500">The quick brown fox...</div>
      <div className="bg-teal-500">The quick brown fox...</div>
      <br />
      11. Width
      <br />
      <div className="w-full bg-indigo-300">w-Full</div>
      <div className="w-96 bg-indigo-400">w-96</div>
      <div className="w-80 bg-indigo-500">w-80</div>
      <div className="w-64 bg-indigo-600">w-64</div>
      <div className="w-48 bg-indigo-800">w-48</div>
      <div className="w-40 bg-indigo-800">w-40</div>
      <div className="w-32 bg-indigo-900 text-gray-50">w-32</div>
      <div className="w-24 bg-indigo-950 text-gray-50">w-24</div>
      <div className="w-[250px] bg-indigo-500">w-Custom</div>
      <br />
      12. Height
      <br />
      <div className="h-96 w-96 bg-red-500">h-96</div>
      <div className="h-80 w-80 bg-blue-500">h-80</div>
      <div className="h-64 w-64 bg-green-600">h-64</div>
      <div className="h-48 w-48 bg-cyan-700">h-48</div>
      <div className="h-40 w-40 bg-emerald-500">h-40</div>
      <div className="h-32 w-32 bg-orange-600">h-32</div>
      <div className="h-screen w-screen bg-yellow-500 text-black text-center">
        Dynamic Resolution
      </div>{" "}
      {/*Tergantung dengan sesuai ukuran layar pengguna.*/}
      <div className="h-[100px] w-24 bg-indigo-600 text-gray-400">h-Custom</div>
      <br />
      14. Justify Content + Gap
      <br />
      <div className="flex justify-start bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">1</div>
        <div className="p-2 rounded-lg bg-sky-500">2</div>
        <div className="p-2 rounded-lg bg-sky-500">3</div>
      </div>
      <br />
      <div className="flex justify-center bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">1</div>
        <div className="p-2 rounded-lg bg-sky-500">2</div>
        <div className="p-2 rounded-lg bg-sky-500">3</div>
      </div>
      <br />
      <div className="flex justify-end bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">1</div>
        <div className="p-2 rounded-lg bg-sky-500">2</div>
        <div className="p-2 rounded-lg bg-sky-500">3</div>
      </div>
      <br />
      <div class="flex justify-between bg-orange-500 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">1</div>
        <div className="p-2 rounded-lg bg-sky-500">2</div>
        <div className="p-2 rounded-lg bg-sky-500">3</div>
      </div>
      <br />
      <div class="flex justify-around bg-purple-500 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">1</div>
        <div className="p-2 rounded-lg bg-sky-500">2</div>
        <div className="p-2 rounded-lg bg-sky-500">3</div>
      </div>
      <br />
      15. Padding
      <br />
      <div className="pt-6 text-white bg-gray-950">pt-6</div>
      <div className="pr-4 bg-red-600">pr-4</div>
      <div className="pb-8 bg-amber-500">pb-8</div>
      <div className="pl-2 bg-lime-600">pl-2</div>
      <div className="py-2 bg-emerald-600">py-2</div>
      <div className="px-2 bg-blue-800">px-2</div>
      <div className="p-[50px] bg-cyan-900">Padding Custom</div>
      <br />
      16. Margin
      <br />
      <div class="mt-6 text-white bg-gray-950">mt-6</div>
      <div class="mr-4 bg-red-600">mr-4</div>
      <div class="mb-8 bg-amber-500">mb-8</div>
      <div class="ml-2 bg-lime-600">ml-2</div>
      <div className="my-2 bg-emerald-600">my-2</div>
      <div className="m-[50px] bg-cyan-400">Margin Custom</div>
      <br />
      17. Border
      <br />
      <div class="rounded w-40 text-center border-2 border-sky-500">
        Rounded
      </div>
      <div class="rounded-md w-40 text-center border-4 border-sky-500">
        Rounded-md
      </div>
      <div class="rounded-lg w-40 text-center border-2 border-sky-500">
        Rounded-lg
      </div>
      <div class="rounded-full w-40 text-center border-8 border-sky-500">
        Rounded-full
      </div>
      <div class="rounded-[100px] w-40 text-center border-[-3px] border-sky-500">
        Rounded Custom
      </div>
      <br />
      18. Flex
      <br />
      <div className="flex">
        <div class="flex-none w-14 h-14 bg-sky-500">Flex none</div>{" "}
        {/* Flex none adalah flex yang tidak berubah atau sudah tetap(fix)*/}
        <div class="flex-initial w-64 bg-violet-500">Flex initial</div>{" "}
        {/* Flex initial adalah flex yang sudah ditentukan*/}
        <div class="flex-auto w-32 bg-sky-950">
          {" "}
          {/* Flex auto adalah flex yang otomatis*/}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea rerum
          cupiditate quam quo! Veritatis, debitis tempore. Veniam adipisci culpa
          voluptate ea quisquam, unde modi amet dolorem accusamus saepe nostrum
          deleniti.
        </div>
      </div>
      <br />
      19. Cursor
      <br />
      <button type="button" class="cursor-pointer bg-rose-500 p-2 rounded-md">
        Submit
      </button>
      <br />
      <br />
      <button
        type="button"
        class="cursor-progress bg-indigo-500 p-2 rounded-md"
      >
        Saving...
      </button>
      <br />
      <br />
      <button
        type="button"
        disabled
        class="cursor-not-allowed bg-emerald-500 p-2 rounded-md"
      >
        Confirm
      </button>
      <br />
      20. Shadow
      <br />
      <div className="bg-cyan-500 shadow-md shadow-cyan-500/50 w-40 rounded-xl text-center py-2 mx-[700px]">
        Subscribe
      </div>
      <br />
      <div className="bg-blue-500 shadow-lg shadow-blue-500/50 w-40 text-center rounded-xl py-2 mx-[550px]">
        Like
      </div>
      <br />
      <div className="bg-indigo-500 shadow-xl shadow-indigo-500/50 w-40 rounded-xl text-center py-2 mx-[850px]">
        Share
      </div>
      <br />
      21. Display
      <br />
      <div>
        When controlling the flow of text, using the CSS property
        <span className="inline bg-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          architecto voluptatem, impedit a minima possimus! Possimus consequatur
          sunt itaque odio veniam consequuntur non minima. Earum magni eum
          nostrum unde veniam.
        </span>
        will cause the text inside the element to wrap normally. While using the
        property{" "}
        <br />
        <br />
        <span className="inline-block bg-red-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, id
          unde itaque dignissimos adipisci quis pariatur veritatis harum, quidem
          totam, quasi sed aspernatur quos quisquam nobis. Fugit deserunt
          distinctio porro.
        </span>
        will wrap the element to prevent the text inside from extending beyond
        its parent. Lastly, using the property{" "}
        <br />
        <br />
        <span className="block bg-yellow-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          rerum, repellat ex enim saepe ullam nemo provident voluptas modi
          earum? At et omnis modi dicta a aspernatur! Nesciunt, quia veritatis.
        </span>
        will put the element on its own line and fill its parent.
      </div>
    </div>
  );
}

export default App;
