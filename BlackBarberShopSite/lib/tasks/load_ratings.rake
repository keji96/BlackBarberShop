namespace :load_ratings do

desc "Load ratings data"
  task :load => :environment do
   require 'faker'
   require './app/models/rating'
    for i in 0..5000
      Rating.create({
          :rating => rand(1..10),
          :recomendation => Faker::Company.bs,
          :barber_id => rand(1..1000)
        })
    end
  end
end
