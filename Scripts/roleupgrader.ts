var roleUpgrader =
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
            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE)
                creep.moveTo(creep.room.controller);
        }
    }
}

export { roleUpgrader };