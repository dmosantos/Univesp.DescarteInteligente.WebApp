export default class Tab {

    constructor(label, icon, model, viewer) {

        this.label = label || 'Nova aba'
        this.icon = icon || 'box'
        this.model = model
        this.viewer = viewer

    }

}