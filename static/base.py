#base.py
#Importing sqlalchemy
from flask_sqlalchemy import SQLAlchemy
#Instantiating sqlalchemy object
db = SQLAlchemy()
#Creating database class
class flu_seasons(db.Model):   
 
    #Creating field/columns of the database as class variables
    id = db.Column(db.Integer, primary_key=True)    
    statename = db.Column(db.String(30), unique=True, nullable=False)                                               
    fluactivity = db.Column(db.String(30), unique=False,nullable=False)
  
    def __init__(self, statename, fluactivity):                   
        self.statename = statename        
        self.fluactivity = fluactivity        
             
    
    #Method to show data as dictionary object
    def json(self):        
        return {'statename': self.statename, 'fluactivity': self.fluactivity}        
 
    #Method to find the query movie is existing or not
    @classmethod    
    def find_by_statename(cls, statename):        
        return cls.query.filter_by(statename=statename).first()
#Method to save data to database
    def save_to(self):        
        db.session.add(self)        
        db.session.commit()
#Method to delete data from database
    def delete_(self):        
        db.session.delete(self)        
        db.session.commit()/