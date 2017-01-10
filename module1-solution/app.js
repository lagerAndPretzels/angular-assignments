(function(){
  angular.module("app",[])
  .controller("ctrlr", function($scope){
    $scope.lunchList = ""; //Initialize variables
    $scope.lunchStatus = "";
    $scope.checkLunchListUpdateStatus = function (){$scope.lunchStatus = checkIfTooMuch($scope.lunchList)};
  });
  function checkIfTooMuch(string)
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
