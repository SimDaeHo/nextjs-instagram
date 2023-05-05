type Props = { image?: string | null };

export default function Avatar({ image }: Props) {
  return (
    <div className="w-9 h-9 rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.15rem]">
      <img className="rounded-full p-[0.01rem]" alt="user profile" src={image ?? undefined} referrerPolicy="no-referrer" />
    </div>
  );
}