import Image from "next/image";

export default function NavBar() {
  return (
    <div>
      <h3>Mus Kaon Ta</h3>

      {/* <div>

      </div> */}
      <button>
        <Image
          src="/ui/menu.png"
          alt="menu button"
          width="25"
          height="25"
        />
      </button>
    </div>
  );
}
