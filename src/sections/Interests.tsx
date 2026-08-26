import { interests } from '../data/content';

export default function Interests() {
  return (
    <ul className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(min(16rem,100%),1fr))]">
      {interests.map(({ icon: Icon, label }) => (
        <li
          key={label}
          className="group @container rounded-lg border border-edge/60 bg-surface p-7 transition-colors hover:border-secondary/30"
        >
          <div className="flex flex-col items-center gap-4 text-center @[22rem]:flex-row @[22rem]:items-start @[22rem]:gap-6 @[22rem]:text-left">
            <Icon
              className="shrink-0 text-4xl text-luna transition-all duration-400 group-hover:scale-120 group-hover:text-secondary @[22rem]:mt-1"
              aria-hidden="true"
            />

            <div>
              <h3 className="font-display text-lg text-luna transition-colors group-hover:text-secondary">
                {label}
              </h3>
              {/* <p className="mt-2 text-sm leading-relaxed text-moon-muted">
                {detail}
              </p> */}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}