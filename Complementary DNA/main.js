function DNAStrand(dna) {
  const array = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  dna = dna.split("");

  let count = 0;

  dna.forEach((element) => {
    dna[count] = array[element];
    count++;
  });

  dna = dna.join("");

  return dna;
}
