namespace :load_shops do

desc "Load barbershop data"
  task :load => :environment do
   require 'csv'
    require './app/models/barbershop'
    csv_file_path = 'BarbershopDatawithlatlng.data'
    CSV.foreach(csv_file_path,{:col_sep => ","}) do |row|
      Barbershop.create({
          :barbershopcity => row[0],
          :barbershopcountry => row[1],
          :barbershopfulladdress => row[2],
          :barbershopphone => row[3],
          :barbershopstate => row[4],
          :barbershopstreetaddress => row[5],
          :barbershopzipcode => row[6],
          :barbershopname => row[7],
          :latitude => row[8],
          :longitude => row[9]
        })
    end
  end


end
