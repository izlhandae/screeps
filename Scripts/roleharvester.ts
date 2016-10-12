var roleHarvester =
{
    run(creep:Creep)
    {
        if (creep.carry.energy < creep.carryCapacity)
        {
            var sources:Source[] = creep.room.find(FIND_SOURCES) as Source[];

            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE)
                creep.moveTo(sources[0]);
        }
        else
        {
            var targets:Structure[] = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                        structure.energy < structure.energyCapacity;
                }
            }) as Structure[];

            if (targets.length > 0)
            {
                if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                    creep.moveTo(targets[0]);
            }
        }
    }
}

export { roleHarvester };