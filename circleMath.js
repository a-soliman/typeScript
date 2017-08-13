var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function clacCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.clacCircumference = clacCircumference;
})(MyMath || (MyMath = {}));
