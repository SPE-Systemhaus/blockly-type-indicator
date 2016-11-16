(function() {
  
    var setShadowOld_ = Blockly.Block.prototype.setShadow;
    Blockly.Block.prototype.setShadow = function(shadow) {
        if (this.isShadow_ != shadow) {
            Blockly.Events.fire(new Blockly.Events.Change(this, 'shadow', null, this.isShadow_, shadow));
        }
        setShadowOld_.call(this, shadow);
    };

    var oldRun_ = Blockly.Events.Change.prototype.run;
    Blockly.Events.Change.prototype.run = function(forward) {
        var workspace = Blockly.Workspace.getById(this.workspaceId);
        var block = workspace.getBlockById(this.blockId);
        if (!block) {
            console.warn("Can't change non-existant block: " + this.blockId);
            return;
        }
        var value = forward ? this.newValue : this.oldValue;
        if (this.element == 'shadow') {
            block.setShadow(value);
        } else {
            oldRun_.call(this, forward);
        }
    };

    var setValue_ = Blockly.Field.prototype.setValue;
    Blockly.Field.prototype.setValue = function(newText) {
        setValue_.call(this, newText);
        if (this.sourceBlock_ && this.sourceBlock_.isShadow()) {
            this.sourceBlock_.setShadow(true);
        }
    };
})();
