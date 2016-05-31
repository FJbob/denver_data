    
input {
    #    exec {
    #        command => "cat /Users/robertmetthe/projects/test.json"
    #        codec => "json"
    #        interval => 3600
    #    }
    file { 
        path => "/Users/robertmetthe/projects/denver_data/census_survey.csv"
        #path => "/Users/nreese/projects/denver_data/crime.csv"
        start_position => "beginning"
        sincedb_path => "/dev/null"
        ignore_older => 0
        type => "report"
}
}




filter {
    csv {
        columns => [
        "STFID",
        "STFID_NUM",
        "ALAND10 AWATER10",    
        "LOGRECNO",    
        "GEO_NAME",    
        "TTL_POPULATION_ALL",  
        "TTL_POPULATION_ALL_MOE", 
        "HISPANIC_OR_LATINO",  
        "HISPANIC_OR_LATINO_MOE",
        "WHITE",   
        "WHITE_MOE",   
        "BLACK",
        "BLACK_MOE",
        "NATIVE_AMERICAN NATIVE_AMERICAN_MOE ASIAN",   
        "ASIAN_MOE",
        "HAWAIIAN_PI", 
        "HAWAIIAN_PI_MOE OTHER_RACE",  
        "OTHER_RACE_MOE",  
        "TWO_OR_MORE", 
        "TWO_OR_MORE_MOE PCT_HISPANIC",    
        "PCT_WHITE",   
        "PCT_BLACK",   
        "PCT_NATIVEAM",    
        "PCT_ASIAN",   
        "PCT_HAWAIIANPI",  
        "PCT_OTHERRACE",   
        "PCT_TWOORMORE_RACES MALE",    
        "MALE_MOE",
        "FEMALE",
        "FEMALE_MOE",  
        "AGE_LESS_5",
        "AGE_5_TO_9",  
        "AGE_10_TO_14",
        "AGE_15_TO_17",    
        "AGE_0_TO_9",  
        "AGE_10_TO_19",    
        "AGE_20_TO_29",    
        "AGE_30_TO_39",    
        "AGE_40_TO_49",    
        "AGE_50_TO_59",    
        "AGE_60_TO_69",    
        "AGE_70_TO_79",    
        "AGE_80_PLUS", 
        "AGELESS18",   
        "AGE65PLUS",   
        "PCT_AGELESS18",   
        "PCT_AGE65PLUS",   
        "MEDIAN_AGE_ALL",  
        "MEDIAN_AGE_ALL_MOE",  
        "MEDIAN_AGE_MALE MEDIAN_AGE_MALE_MOE MEDIAN_AGE_FEMALE",   
        "MEDIAN_AGE_FEMALE_MOE",   
        "TOTAL_COMMUTERS", 
        "TOTAL_COMMUTERS_MOE COMMUTE_LESS_15", 
        "COMMUTE_LESS_15_MOE COMMUTE_15_TO_30",    
        "COMMUTE_30_TO_45",    
        "COMMUTE_45_TO_60",    
        "COMMUTE_60_PLUS TTLPOP_25PLUS_EDU",   
        "TTLPOP_25PLUS_EDU_MOE",   
        "LESS_THAN_HS_DIPLOMA_EDU",    
        "HSGRAD_OR_EQUIV_EDU SOMECOLLEGE_OR_AA_EDU",   
        "BACHELORS_OR_HIGHER_EDU TTL_HOUSING_UNITS",   
        "TTL_HOUSING_UNITS_MOE",   
        "OCCUPIED_HU OCCUPIED_HU_MOE VACANT_HU",   
        "VACANT_HU_MOE",   
        "OWNER_OCCUPIED_HU",   
        "OWNER_OCCUPIED_HU_MOE",   
        "RENTER_OCCUPIED_HU",  
        "RENTER_OCCUPIED_HU_MOE",  
        "TTL_HOUSEHOLDS",  
        "TTL_HOUSEHOLDS_MOE",  
        "FAMILY_HOUSEHOLDS",   
        "FAMILY_HOUSEHOLDS_MOE",   
        "MARRIED_COUPLE_FAMILY",   
        "MARRIED_COUPLE_FAMILY_MOE",   
        "OTHER_FAMILY",    
        "OTHER_FAMILY_MOE",    
        "MALE_HHLDR_NO_WIFE_PRESENT",  
        "MALE_HHLDR_NO_WIFE_PRESENT_MOE",  
        "FEMALE_HHLDR_NO_HSBND_PRESENT",   
        "FEMALE_HHLDR_NO_HSBND_PRE_MOE",   
        "NONFAMILY_HOUSEHOLD", 
        "NONFAMILY_HOUSEHOLD_MOE", 
        "HOUSEHOLDER_ALONE",   
        "HOUSEHOLDER_ALONE_MOE",   
        "HOUSEHOLDER_NOT_ALONE",   
        "HOUSEHOLDER_NOT_ALONE_MOE",   
        "HH_INC_LESS_10000",   
        "HH_INC_LESS_10000_MOE",   
        "HH_INC_10000_14999",  
        "HH_INC_10000_14999_MOE",  
        "HH_INC_15000_19999",  
        "HH_INC_15000_19999_MOE",  
        "HH_INC_20000_24999",  
        "HH_INC_20000_24999_MOE",  
        "HH_INC_25000_29999",  
        "HH_INC_25000_29999_MOE",  
        "HH_INC_30000_34999",  
        "HH_INC_30000_34999_MOE",  
        "HH_INC_35000_39999",  
        "HH_INC_35000_39999_MOE",  
        "HH_INC_40000_44999",  
        "HH_INC_40000_44999_MOE",  
        "HH_INC_45000_49999",  
        "HH_INC_45000_49999_MOE",  
        "HH_INC_50000_59999",  
        "HH_INC_50000_59999_MOE",  
        "HH_INC_60000_74999",  
        "HH_INC_60000_74999_MOE",  
        "HH_INC_75000_99999",  
        "HH_INC_75000_99999_MOE",  
        "HH_INC_100000_124999",    
        "HH_INC_100000_124999_MOE",    
        "HH_INC_125000_149999",    
        "HH_INC_125000_149999_MOE",    
        "HH_INC_150000_199999",    
        "HH_INC_150000_199999_MOE",    
        "HH_INC_OVER_200000",  
        "HH_INC_OVER_200000_MOE",  
        "MED_HH_INCOME",   
        "MED_HH_INCOME_MOE",   
        "MED_FAMILY_INCOME",   
        "MED_FAMILY_INCOME_MOE",   
        "PER_CAPITA_INCOME",   
        "PER_CAPITA_INCOME_MOE",   
        "AVG_HH_INC",  
        "AVG_FAM_INCOME",  
        "MEDIAN_EARNINGS",
        "MEDIAN_EARNINGS_MOE MEDIAN_EARN_MALE",    
        "MEDIAN_EARN_MALE_MOE",    
        "MEDIAN_EARN_FEMALE",  
        "MEDIAN_EARN_FEMALE_MOE",  
        "MED_YR_STRUCTURE_BUILT",  
        "MED_YR_STRUCTURE_BUILT_MOE",  
        "BUILT_2010_OR_LATER", 
        "BUILT_2010_OR_LATER_MOE", 
        "BUILT_2000_2009", 
        "BUILT_2000_2009_MOE", 
        "BUILT_1990_1999", 
        "BUILT_1990_1999_MOE", 
        "BUILT_1980_1989", 
        "BUILT_1980_1989_MOE", 
        "BUILT_1970_1979", 
        "BUILT_1970_1979_MOE", 
        "BUILT_1960_1969", 
        "BUILT_1960_1969_MOE", 
        "BUILT_1950_1959", 
        "BUILT_1950_1959_MOE", 
        "BUILT_1940_1949", 
        "BUILT_1940_1949_MOE", 
        "BUILT_1939_OR_EARLIER",   
        "BUILT_1939_OR_EARLIER_MOE",   
        "MED_CONTRACT_RENT",   
        "MED_CONTRACT_RENT_MOE",   
        "MED_GROSS_RENT",  
        "MED_GROSS_RENT_MOE",  
        "MEDIAN_HOME_VALUE",   
        "MEDIAN_HOME_VALUE_MOE"
        ]
        separator => ","
    }
}


output {
    stdout {
        codec => rubydebug
    }
    elasticsearch {
        index => "denver_census_survey"
    }
}
