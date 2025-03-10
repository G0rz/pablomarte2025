export default function MusicLayout({children}: { children: React.ReactNode; }) {
  return (
      <section className="flex flex-wrap items-center justify-center py-8 md:py-10">
        {children}
    </section>
  );
}
