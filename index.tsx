import h from "./jsx";

export function App() {
  return (
    <div>
      <h1>Look at this counter!</h1>
      <p>
        Counter: <span class="counter">0</span>
      </p>
      <button rickroll class="increment">
        Increment
      </button>
      <script>
        {`const counter = document.querySelector(".counter");
      const increment = document.querySelector(".increment");
      let count = 0;
      increment.addEventListener("click", () => {
        count++;
        counter.innerText = count;
      });`}
      </script>
    </div>
  );
}

document.getElementById("root")!.appendChild(<App />);
