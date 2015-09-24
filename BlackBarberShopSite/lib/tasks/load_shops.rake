namespace :load_shops do

desc "Load barbershop data"
  task :load => :environment do
   require 'csv'
    require './app/models/barbershop'
    csv_file_path = 'BarbershopDatawithlatlng.data'
    CSV.foreach(csv_file_path,{:col_sep => ","}) do |row|
      Barbershop.create({
          :BarbershopCity => row[0],
          :BarbershopCountry => row[1],
          :BarbershopFullAddress => row[2],
          :BarbershopPhone => row[3],
          :BarbershopState => row[4],
          :BarbershopStreetAddress => row[5],
          :BarbershopZipCode => row[6],
          :BarbershopName => row[7],
          :latitude => row[8],
          :longitude => row[9]
        })
    end
  end


end
