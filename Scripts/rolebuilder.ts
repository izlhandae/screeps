var roleBuilder =
{
    run(creep:Creep)
    {
        if (creep.memory.building && creep.carry.energy == 0)
        {
            creep.memory.building = false;
            creep.say("harvesting");
        }
        if (!creep.memory.building && creep.carry.energy == creep.carryCapacity)
        {
            creep.memory.building = true;
            creep.say("building");
        }

        if (creep.memory.building)
        {
            var targets:ConstructionSite[] = creep.room.find(FIND_CONSTRUCTION_SITES) as ConstructionSite[];

            if (targets.length > 0)
            {
                if (creep.build(targets[0]) == ERR_NOT_IN_RANGE)
                {
                    creep.moveTo(targets[0]);
                }
            }
        }
        else
        {
            var sources:Source[] = creep.room.find(FIND_SOURCES) as Source[];

            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE)
            {
                creep.moveTo(sources[0]);
            }
        }
    }
}

export { roleBuilder };