declare type NoElementConfig<Type> = {
    [Property in keyof Type]: Exclude<Type[Property], HTMLElement | null>;
};
declare type PageSideBarItemOptions = Omit<NoElementConfig<SidebarItemConfig>, 'name' | 'link' | 'onClick' | 'onRender'> & {
    categoryID: string;
};
declare type PageSideBarSubItemOptions = Omit<NoElementConfig<SidebarSubitemConfig>, 'link' | 'onClick' | 'onRender'> & {
    categoryID: string;
    itemID: string;
};
interface PageData extends IDData {
    customName?: string;
    media: string;
    containerID: string;
    headerBgClass: string;
    hasGameGuide: boolean;
    canBeDefault: boolean;
    action?: string;
    skills?: string[];
    sidebarItem?: PageSideBarItemOptions;
    sidebarSubItems?: PageSideBarSubItemOptions[];
    skillSidebarCategoryID?: string;
    displayClass?: string;
}
interface PageModificationData extends IDData {
    skills?: {
        add?: {
            skillID: string;
            insertAt?: number;
        }[];
        remove?: string[];
    };
}
declare class Page extends NamespacedObject {
    get name(): string;
    get media(): string;
    containerID: string;
    headerBgClass: string;
    hasGameGuide: boolean;
    canBeDefault: boolean;
    action?: Action;
    skills?: AnySkill[];
    skillSidebarCategoryID?: string;
    sidebarItem?: PageSideBarItemOptions;
    sidebarSubItems?: PageSideBarSubItemOptions[];
    displayClass?: string;
    _media: string;
    _customName?: string;
    constructor(namespace: DataNamespace, data: PageData, game: Game);
    applyDataModification(modData: PageModificationData, game: Game): void;
    /** Generates sidebar elements for the page, with the exception of skills */
    generateSideBar(): void;
}
