import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled'
import './ProjectContainer.css'

function ProjectContainer ({ project }) {
  return(
  <div className='project'>
    <h5>{project.name}</h5>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.videoLink && (
      <a
        href={project.videoLink}
        aria-label='source code'
        className='link link--icon link--text'
      >
        <PlayCircleFilled />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)}

export default ProjectContainer
