function myFunctionWithHoistingVariable() {
    console.log('[hoistedVariable]', hoistedVariable);
    var hoistedVariable = 5;
    console.log('[hoistedVariable]', hoistedVariable);
}

myFunctionWithHoistingVariable();
