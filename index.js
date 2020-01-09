// Write your solution in this file!
function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]:value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {

}

function deleteFromDriverByKey(driver, key) {
  obj = Object.assign({}, driver, delete driver.key);
}

function destructivelyDeleteFromDriverByKey(driver, key) {

}
