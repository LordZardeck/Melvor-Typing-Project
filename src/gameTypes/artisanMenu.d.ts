declare class DropDown extends ContainedComponent {
    parent: HTMLElement;
    container: HTMLDivElement;
    button: HTMLButtonElement;
    optionsContainer: HTMLDivElement;
    constructor(parent: HTMLElement, id: string, buttonClasses: string[], optionsClasses: string[], scroll?: boolean, maxOptionsHeight?: number);
    setButtonText(text: string): void;
    setButtonCallback(callback: (this: GlobalEventHandlers, ev: MouseEvent) => any): void;
    addOption(optionContent: Node[], callback: VoidFunction): void;
    clearOptions(): void;
}
declare class ArtisanMenu<ProductType extends Item> extends ContainedComponent {
    skill: SkillWithMastery<MasteryAction, MasterySkillData>;
    parent: HTMLElement;
    container: HTMLDivElement;
    nameRow: HTMLDivElement;
    productBlock: HTMLDivElement;
    productImage: HTMLImageElement;
    productQuantity: HTMLElement;
    createBlock: HTMLDivElement;
    createText: HTMLElement;
    productName: HTMLElement;
    productDescription: HTMLElement;
    selectedText: HTMLElement;
    viewStatsText: HTMLElement;
    buffsContainer: HTMLDivElement;
    productPreservation: PreservationIcon;
    productDoubling: DoublingIcon;
    masteryCol: HTMLDivElement;
    mastery: MasteryDisplay;
    ingredientsCol: HTMLDivElement;
    dropDownCont: HTMLDivElement;
    recipeDropdown: DropDown;
    recipeDropdownItems: QtyIcon[][];
    requires: RequiresBox;
    haves: HavesBox;
    productsCol: HTMLDivElement;
    produces: ProducesBox;
    productIcon: ItemQtyIcon;
    grants: GrantsBox;
    creationCol: HTMLDivElement;
    createButton: HTMLButtonElement;
    interval: IntervalIcon;
    progressBar: ProgressBar;
    progressTimestamp: number;
    progressInterval: number;
    product?: ProductType;
    noneSelected: boolean;
    constructor(containerID: string, skill: SkillWithMastery<MasteryAction, MasterySkillData>);
    localize(): void;
    setSelected(recipe: ArtisanSkillRecipe): void;
    setIngredients(items: AnyItemQuantity[], gp: number, sc: number): void;
    setIngredientsFromRecipe(recipe: ArtisanSkillRecipe): void;
    setProduct(item: ProductType, qty: number): void;
    updateQuantities(): void;
    updateGrants(xp: number, masteryXP: number, poolXP: number): void;
    updateChances(preserveChance: number, doublingChance: number): void;
    updateInterval(interval: number): void;
    setCreateCallback(callback: VoidFunction): void;
    animateProgressFromTimer(timer: Timer): void;
    startProgressBar(interval: number): void;
    stopProgressBar(): void;
    updateProgressBar(): void;
    hideRecipeDropdown(): void;
    showRecipeDropdown(): void;
    setRecipeDropdown(altRecipeIngredients: {
        items: AnyItemQuantity[];
        gp: number;
        sc: number;
    }[], selectCallback: (recipeID: number) => VoidFunction, displayOrder?: number[]): void;
}
declare class HerbloreArtisanMenu extends ArtisanMenu<PotionItem> {
    tierImages: HTMLImageElement[];
    tierTooltips: TippyTooltip[];
    tierContainer: HTMLHeadingElement;
    tierText: HTMLElement;
    constructor(herblore: Herblore);
    setProductTier(product: PotionItem, productTier: number): void;
    setPotionDescription(item: PotionItem, recipe: HerbloreRecipe): void;
    setSelected(recipe: ArtisanSkillRecipe): void;
    setProduct(item: PotionItem, qty: number): void;
    localize(): void;
}
