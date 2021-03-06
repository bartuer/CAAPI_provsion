var fs = require('fs');
var sep = require('path').sep;
var exec = require('child_process').execSync;
var machine_parameter = JSON.parse(fs.readFileSync([process.cwd(), 'parameters.json'].join(sep)));

var user_name = machine_parameter.parameters.virtualMachines_nixml_adminUsername.value;
var machine_name = machine_parameter.parameters.virtualMachines_nixml_name.value;
var machine_ip = machine_parameter.parameters.publicIPAddresses_nixml_ip_name;
var address = JSON.parse(exec(`azure network public-ip show CAAPI ${machine_ip} --json`).toString());
var ip = address.ipAddress;
var dns_name = address.dnsSettings.fqdn;
console.log('');
console.log('');
console.log(`Host ${machine_name}`);
console.log(`     Hostname ${ip}`);
console.log(`     Hostname ${dns_name}`);
console.log(`     User ${user_name}`);