namespace :load_barbers do

desc "Load barbers data"
  task :load => :environment do
   require 'faker'

    for i in 0..1000
      Barber.create({

          :name => Faker::Name.name,
          :experience => rand(1..20),
          :avatar => Faker::Avatar.image,
          :barbershop_id => rand(1..394)
        })
    end
  end
end
