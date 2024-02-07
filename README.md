# ANGULAR-ALGO
angular-algos coding game et autres

---

## MENUDISPLAYCOMPONENT
On vous demande de :
Terminer un composant Angular simple nommé MenuDisplayComponent ayant menu-display-component pour sélecteur.
Terminer la déclaration de la variable appRoutes.
 
Le composant doit contenir deux éléments ```<a>```. Ils symbolisent un menu de l'application :
Quand on clique sur l'élément ```<a> ```avec id="menu1" le composant associé à la route /menu1 doit être chargé.
Quand on clique sur l'élément ```<a>``` avec id="menu2" le composant associé à la route /menu2 doit être chargé.
Initialement, aucun des deux composants n'est chargé.
Vous devez créer les routes correspondantes dans appRoutes. Menu1Component correspond au chemin menu1, Menu2Component correspond au chemin menu2.
 
Vous devez seulement mettre à jour MenuDisplayComponent (+ son template) et appRoutes.
 
Notes : 
Un bloc de "Preview" est disponible pour vous permettre de débugguer votre code. Il affiche votre composant ci-dessous. Vous pouvez l'ouvrir et le modifier à votre guise.
Ce bloc de "Preview" n'est pas pris en compte dans le calcul du score de votre code.

---

## CounterComponent
On vous demande de créer un composant Angular simple nommé counter-component ayant  CounterComponent pour sélecteur.

L'objectif de ce composant est de :
Prendre un message en "input" Lire une valeur d'intervalle saisie par l'utilisateur (entier, en millisecondes) 
Envoyer le message en tant qu'événements de manière périodique vers son "output"
Au niveau HTML, le composant est composé d'un champ ```<input>``` avec id="intervalInput" et d 'un bouton ```<button>``` avec id="intervalSetButton".
L'utilisateur peut modifier l'intervalle en saisissant une valeur dans le champ puis en cliquant sur le bouton.

Le composant doit avoir un @Input nommé message et un @Output nommé tick.
Il doit générer des événements de type "string" vers tick à intervalle régulier correspondant à la valeur saisie par
l'utilisateur. La chaîne de caractère utilisée pour générer les événements provient de l"input" message. 

Le composant doit être capable de gérer les changements du message et les changements de la valeur de l'intervalle.

Notes : Vous devez modifier le template ainsi que la classe du composant. 

Un bloc de "Preview" est disponible pour vous permettre de débugguer votre code. Il affiche votre composant ci
dessous. Vous pouvez l'ouvrir et le modifier à votre guise. 
Pour vous aider, ce bloc contient un composant parent qui manipule le composant que vous devez créer (affichage d'un compteur à côté du
message) Ce bloc de "Preview" n'est pas pris en compte dans le calcul du score de votre code.

---

## LabelComponent
Vous devez créer un simple composant Angular nommé LabelComponent avec label-component pour sélecteur.

Il doit afficher un ```<div>``` avec la classe label.
Il prend deux entrées, un texte label à afficher et une couleur de texte color.

Ainsi :```<label-component label='Hello World!' color='red'></label-component>```

Doit afficher : ```<div class="label" style="color: red;">Hello World!</div>```
 

---

## PipePercentCurrencyDate
On vous demande de terminer le composant TransactionDetailsComponent.
Vous devez uniquement modifier la partie template du composant. 

L'objectif de ce composant est d'afficher la date, le montant, la devise et les frais associés à une
transaction, chacun dans un format spécifique.

Vous devez afficher 3 divs :

*Le div "Fee" (frais)*
L'id de ce div doit être fee.Il affiche les frais fee associés à la transaction sous forme de pourcentage :
S'il y a moins de 2 chiffres pour la partie entière de la valeur en pourcentage, vous devez combler avec des zéros à gauche. 
S'il y a moins de 2 chiffres dans la partie décimale, vous devez comblez avec zéros à droite. 
S'il y a plus de 3 chiffres dans la partie décimale, vous devez arrondir à 3 chiffres. 
On utilise un point . en tant que séparateur décimal.
Par exemple 0.031234 s'affiche 03.123%

*Le div "Amount" (montant)*
L'id de ce div doit être amount. Il affiche les frais amount et la devise de la transaction.
Le symbole de la devise associée au code currency (par exemple  pour € EUR) est affiché avant les frais
Les frais sont formattés comme suit :
S'il y a moins de 9 chiffres pour la partie entière, vous devez combler avec des zéros à gauche. Le
séparateur des milliers doit être une virgule. 
S'il y a moins de 2 chiffres dans la partie décimale, vous , devez comblez avec zéros à droite. 
S'il y a plus de 2 chiffres dans la partie décimale, vous devez arrondir à 2 chiffres.
Par exemple currency=EUR, amount=312.562 s'affiche €000,000,312.56.
Le div "Time" (date).
L'id de ce div doit être time. La date et l'heure de la transaction doivent être affiché dans ce format inhabituel : 'ww: yyyy MMMMM dd hh-mm-ss'.

Notes:  Un bloc de "Preview" est disponible pour vous permettre de débugguer votre code. 
Il affiche votre composant ci-dessous. Vous pouvez ouvrir ce bloc et le modifier à votre guise. 
Le bloc de "Preview" n'est pas pris en compte dans le calcul du score de votre code.

---

