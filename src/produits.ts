export {};

interface Produits {
    id: number;
    nom: string;
    prix: number;
    stock: number;
    categorie: string;
    descriptionInterne?: string;
}

type NouveauProduit = Omit<Produits, "id">;

type MiseAJourProduit = Partial<NouveauProduit>;

type ProduitPublic = Omit<Produits, "descriptionInterne">;

function genererCatalogue(
    produits: Produits[]
): Readonly<Record<number, Produits>> {
    const catalogue: Record<number, Produits> = {};

    for (const produit of produits) {
        catalogue[produit.id] = produit;
    }

    return catalogue;
}
const entrepot: Produits[] = [
    { id: 1, nom: "Laptop", prix: 1200, stock: 5, categorie: "Informatique" },
    { id: 2, nom: "Souris", prix: 25, stock: 50, categorie: "Accessoires" }
];

const nouveauOk: NouveauProduit = {
    nom: "Clavier",
    prix: 75,
    stock: 30,
    categorie: "Accessoires"
};

const patchOk: MiseAJourProduit = { prix: 80 };

const pubOk: ProduitPublic = {
    id: 1,
    nom: "Laptop",
    prix: 1200,
    stock: 5,
    categorie: "Informatique"
};

const catalogue = genererCatalogue(entrepot);

console.assert(catalogue[1]?.nom === "Laptop", "clé 1 → Laptop");
console.assert(Object.keys(catalogue).length === 2, "2 clés");

console.log("Exercice 2.4.3 terminé ✅");