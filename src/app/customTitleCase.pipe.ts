    import { Pipe, PipeTransform } from '@angular/core';
    @Pipe({
        name: 'customTitleCase'
    })
    export class CustomTitleCase implements PipeTransform{
        except:string[] = []; 
        transform(value: string, ...except: string[]){ // accepts any number of arguments
            this.except = [...except];
            //console.log(this.except);
            if(!value) return null;
    
            let words = value.split(" ");
            for (var index = 0; index < words.length; index++) {
            var word = words[index];
            if (index > 0 && this.isPreposition(word)) {
                words[index] = word.toLowerCase();
            }
            else {
                words[index] = this.toTitleCase(word);
            }
            }
        
            return words.join(" ");
        }
        private isPreposition = (word: string):boolean => {
            let lowerCaseWords  = [...this.except];   
            console.log(lowerCaseWords); 
            return lowerCaseWords.includes(word.toLowerCase());
        }
    
        private toTitleCase = (word: string):string => 
             word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
        
    }