export {};

class CompteBancaire {
    private solde: number;
    readonly numero: string;
    static nbComptes = 0;

    constructor(numero: string, soldeInitial = 0) {
        this.numero = numero;
        this.solde = soldeInitial;
        CompteBancaire.nbComptes++;
    }
    deposer(montant: number): void {
        if (montant <= 0) {
            throw new Error("Le dépôt doit être supérieur à zéro");
        }

        this.solde += montant;
    }
    retirer(montant: number): void {
        if (montant > this.solde) {
            throw new Error("Solde insuffisant");
        }

        this.solde -= montant;
    }
    get soldeActuel(): number {
        return this.solde;
    }

}
// Tests
const c1 = new CompteBancaire("A-100", 500);
const c2 = new CompteBancaire("B-200");

c1.deposer(200);
console.assert(c1.soldeActuel === 700, "700 après dépôt");

c1.retirer(150);
console.assert(c1.soldeActuel === 550, "550 après retrait");

console.assert(c2.soldeActuel === 0, "solde initial = 0");
console.assert(CompteBancaire.nbComptes === 2, "2 comptes créés");

try {
    c1.retirer(9999);
    console.assert(false, "devrait lever une erreur");
} catch {
    // Erreur attendue
}

try {
    c1.deposer(0);
    console.assert(false, "devrait lever une erreur");
} catch {
    // Erreur attendue
}

console.log("Exercice 2.4.1 terminé ");