import { registerEnumType } from '@nestjs/graphql';

export enum MajorTradeLine {
 Afghanisthan = 'Afghanisthan',
 Albania = 'Albania',
 Algeria = 'Algeria',
 Andoora = 'Andoora',
 Angola = 'Angola',
 Antigua_and_Barbuda = 'Antigua and Barbuda',
 Argentina = 'Argentina',
 Armenia = 'Armenia',
 Australia = 'Australia',
 Austria = 'Austria',
 Azzerbaijan = 'Azerbaijan',
 Bahamas = 'Bahamas',
 Bahrain = 'Bahrain',
 Bangladesh = 'Bangladesh',
 Barbados = 'Barbados',
 Belarus = 'Belarus',
 Belgium = 'Belgium',
 Belize = 'Belize',
 Benin = 'Benin',
 Bhutan = 'Bhutan',
 Bolivia = 'Bolivia',
 Bosnia_and_Herzegovina = 'Bosnia and Herzegovina',
 Botswana = 'Botswana',
 Brazil = 'Brazil',
 Brunei = 'Brunei',
 Bulgaria = 'Bulgaria',
 Burkina_Faso = 'Burkina Faso',
 Burundi = 'Burundi',
 India = 'India',


}

registerEnumType(MajorTradeLine, {
  name: 'MajorTradeLine',
  description: 'The major trade line options',
});
