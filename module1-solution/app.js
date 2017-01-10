(function(){
  angular.module("LunchCheck",[])
  .controller("LunchCheckController", LunchCheckController);
  //Minification Proof
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.lunchList = ""; //Initialize variables
    $scope.lunchStatus = "";
    $scope.lunchStatusColor = "black";
    $scope.checkLunchListUpdateStatusAndColor = function (){
      $scope.lunchStatus = generateLunchListStatus($scope.lunchList)
      $scope.lunchStatusColor = generateLunchStatusColor($scope.lunchStatus);
    };
  }
  function generateLunchListStatus(string)
  {
    var response = "Please enter data first";
    if(string.length > 0){        //Only operate on a string of non-zero length
      var splitItems = removeEmptyListItems(string.split(","));
      if(splitItems.length > 0) { //Only operate on a split result of non-zero length
        if(splitItems.length > 3){ //More than 3 is too much.
          response = "Too much!";
        } else {                   //1 to 3 is just right.
          response = "Enjoy!";
        }
      }
    }
    return response;
  }
  function generateLunchStatusColor(string)
  {
    var color = "red";
    if(string === "Enjoy!" || string === "Too much!") {
      color = "green";
    }
    return color;
  }
  function removeEmptyListItems(array)
  {
    for(var i = 0; i < array.length;){
      if(array[i].trim().length === 0){
        array.splice(i, 1); //When trimmed and zero, splice it out & continue where left off
      } else {
        i++;                //Increment and continue without removal
      }
    }
    return array;
  }
})();
