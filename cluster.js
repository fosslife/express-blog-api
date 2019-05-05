const cluster = require("cluster");
const os = require("os");


const CPUS = os.cpus();  
if (cluster.isMaster) {  
    CPUS.forEach(function() {
        cluster.fork();
    });
    cluster.on("listening", function(worker) {
        process.stdout.write(`Cluster ${worker.process.pid} connected`);
    });
    cluster.on("disconnect", function(worker) {
        process.stdout.write(`Cluster ${worker.process.pid} disconnected`);
    });
    cluster.on("exit", function(worker) {
        process.stdout.write(`Cluster ${ worker.process.pid} is dead`);
        // Ensuring a new cluster will start if an old one dies
        cluster.fork();
    });
} else {
    require("./index.js");
}