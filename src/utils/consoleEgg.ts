const CAT = String.raw`
     /\_/\
    ( o.o )   você achou o console.
     > ^ 
`;

export function printConsoleEgg(): void {
  console.log(`%c${CAT}`, 'color:#E3C284;font-family:monospace;font-size:12px');
  console.log(
    '%cthree keys, three gates. a chave de cobre está na tech stack.',
    'color:#6BA79B;font-family:monospace;font-size:11px'
  );
}