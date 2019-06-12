class Point < ApplicationRecord
   before_create :geocode

    def geocode
        coordinates = Geocoder.search(self.zip_code).first.coordinates
        self.latitude = coordinates.first
        self.longitude = coordinates.last
    end
end
