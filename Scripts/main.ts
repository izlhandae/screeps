import { roleHarvester } from "./roleharvester";
import { roleUpgrader } from "./roleupgrader";


export function loop()
{
    for(let name in Game.creeps)
    {
        var creepName:string = name as string;
        var creep:Creep = Game.creeps[creepName];
        if (creep.memory.role == "harvester")
            roleHarvester.run(creep);
        if (creep.memory.role == "upgrader")
            roleUpgrader.run(creep);
    }
}