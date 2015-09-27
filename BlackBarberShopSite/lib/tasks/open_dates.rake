namespace :load_opendates do

desc "Load open-closed data"
  task :load => :environment do
   require 'csv'
    require './app/models/opendate'
    csv_file_path = 'openclosed.csv'
    CSV.foreach(csv_file_path,{:col_sep => ","}) do |row|
      Opendate.create({
          :closed => row[0],
          :day_of_the_week => row[1],
          :open => row[2],
          :barbershop_id => row[3],
        })
    end
  end


end
