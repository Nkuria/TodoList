import { displayProjects } from './dom';
import { fetchItem } from './localStorage';

displayProjects(fetchItem('projects'));
