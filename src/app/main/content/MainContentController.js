export default class MainContentController {

    /*@ngInject*/
    constructor(TECH_GROUPS) {
        console.log(TECH_GROUPS)
        this.techGroups = TECH_GROUPS;
    }
}