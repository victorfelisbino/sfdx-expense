({
    navigateToExpense: function(component, event) {
        var expense = component.get("v.expense");
        $A.get("e.force:navigateToSObject").setParams({
            "recordId": expense.Id
        }).fire();
    },

    onValueChange: function(component, event) {
        var expense = component.get("v.expense");
        var updateEvent = component.getEvent("expenseUpdatedEvent");
        updateEvent.setParams({
            "expense": expense
        });
        updateEvent.fire();
    }
})