class Barbershop < ActiveRecord::Base
   has_many :opendates
   has_many :barbers
   has_many :ratings, through: :barbers
  geocoded_by :barbershopfulladdress
  after_validation :geocode
end
