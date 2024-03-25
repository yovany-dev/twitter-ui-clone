import { Button } from "../../Button/Button";

const Subscribe = () => {
  return (
    <section className="py-3 px-4 flex items-start flex-col gap-[10px] rounded-2xl bg-aside">
      <h2 className="text-xl font-bold">Subscribe to Premium</h2>
      <p className="t-text-m">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
      <Button>Subscribe</Button>
    </section>
  )
}

export { Subscribe };
