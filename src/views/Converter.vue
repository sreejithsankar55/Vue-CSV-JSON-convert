<template> <!-- Reading and parsing and sending the post request of the json converted csv file -->
  <div id="app">
    <div class="flex justify-center bg-grey-lighter">
      <div class="flex h-screen">
        <div class="m-auto">
          <div class="container"> <!--below loggedin computed property checks whether the user is loggedin or not-->
            <h1 v-if="loggedin == 0">Oops! Please sign in</h1>
            <div v-if="loggedin == 200"  class="mb-2 uppercase font-bold text-lg text-grey-darkest">
              <div>
                <h4>Import the CSV File</h4>
              </div>
              <div>
                <div class="form-group">
                  <label for="csv_file">CSV file to import</label>
                  <div>
                    <input type="file" id="csv_file" name="csv_file" @change="loadCSV($event)" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      parse_csv: [], //array that holds the json value
      csvdata: null
    };
  },
  methods: {
    csvJSON(strData) {
      // then default to comma.
      var strDelimiter = ",";
      // Create a regular expression to parse the CSV values.
      var objPattern = new RegExp(
        // Delimiters.
        "(\\" +
          strDelimiter +
          "|\\r?\\n|\\r|^)" +
          // Quoted fields.
          '(?:"([^"]*(?:""[^"]*)*)"|' +
          // Standard fields.
          '([^"\\' +
          strDelimiter +
          "\\r\\n]*))",
        "gi"
      );
      // Create an 2-D array to hold our data. Give the array
      // a default empty first row.
      var arrData = [[]];
      // Create an array to hold our individual pattern
      // matching groups.
      var arrMatches = null;
      // Keep looping over the regular expression matches
      // until we can no longer find a match.
      while ((arrMatches = objPattern.exec(strData)) != null) {//null checking is added explicitly for lint
        // Get the delimiter that was found.
        var strMatchedDelimiter = arrMatches[1];
        // Check to see if the given delimiter has a length
        // (is not the start of string) and if it matches
        // field delimiter. If id does not, then we know
        // that this delimiter is a row delimiter.
        if (strMatchedDelimiter.length && strMatchedDelimiter != strDelimiter) {
          // Since we have reached a new row of data,
          // add an empty row to our data array.
          arrData.push([]);
        }
        // Now that we have our delimiter out of the way,
        // let's check to see which kind of value we
        // captured (quoted or unquoted).
        var strMatchedValue;
        if (arrMatches[2]) {
          // We found a quoted value. When we capture
          // this value, unescape any double quotes.
          strMatchedValue = arrMatches[2].replace(new RegExp('""', "g"), '"');
        } else {
          // We found a non-quoted value.
          strMatchedValue = arrMatches[3];
        }
        // Now that we have our value string, let's add
        // it to the data array.
        arrData[arrData.length - 1].push(strMatchedValue);
      }
      // Return the parsed data.

      var array = arrData;
      var objArray = [];
      for (var i = 1; i < array.length-1; i++) {
        objArray[i - 1] = {};
        for (var k = 0; k < array[0].length && k < array[i].length; k++) {
          var key = array[0][k];
          objArray[i - 1][key] = array[i][k];
        }
      }

      var json = JSON.stringify(objArray);
      var str = json.replace(/},/g, "},\r\n");
      console.log(str);
      return str;
    },
    loadCSV(e) { //We are reading the csv file from window
      var vm = this;
      if (window.FileReader) {
        var reader = new FileReader();
        reader.readAsText(e.target.files[0]);
        // Handle errors load
        reader.onload = function(event) {
          var csv = event.target.result;
          vm.parse_csv = vm.csvJSON(csv); //passing csv file to convert to json
          vm.$http.post("http://localhost:3000/jsonData", { //sending a post request of json file
            csvdata: JSON.parse(vm.parse_csv)
          });
          reader.onerror = function(evt) {
            if (evt.target.error.name == "NotReadableError") {
              alert("Canno't read file !");
            }
          };
        };
      } else {
        alert("FileReader are not supported in this browser.");
      }
    }
  },
  
  computed: {
    loggedin() { // to check user is logged in or not
      return this.$store.getters["users/successcode"];
    }
  }
};
</script>

<style>
</style>