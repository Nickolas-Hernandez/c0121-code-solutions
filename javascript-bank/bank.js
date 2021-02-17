/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0) {
    var accountObject = new Account(this.nextAccountNumber, holder);
    accountObject.deposit(balance);
    this.accounts.push(accountObject);
    this.nextAccountNumber++;
    return accountObject.number;
  } else return null;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var assets = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    assets += this.accounts[i].getBalance();
  }
  return assets;
};
