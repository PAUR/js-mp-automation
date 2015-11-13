class MainContentController {

    public techGroups;

    /*@ngInject*/
    constructor(TECH_GROUPS) {
        this.techGroups = TECH_GROUPS;
    }
}

export = MainContentController;